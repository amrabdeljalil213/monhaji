import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isToday, isOverdue } from '@/lib/utils'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const filter = searchParams.get('filter') || 'all'

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const nextWeek = new Date(today)
    nextWeek.setDate(nextWeek.getDate() + 7)

    let where = {}

    switch (filter) {
      case 'today':
        where = {
          dueDate: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
          status: { not: 'COMPLETED' },
        }
        break
      case 'week':
        where = {
          dueDate: {
            gte: today,
            lt: nextWeek,
          },
          status: { not: 'COMPLETED' },
        }
        break
      case 'overdue':
        where = {
          dueDate: {
            lt: today,
          },
          status: { not: 'COMPLETED' },
        }
        break
      case 'completed':
        where = { status: 'COMPLETED' }
        break
      default:
        where = {}
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        project: true,
      },
      orderBy: {
        dueDate: 'asc',
      },
    })

    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, status, priority, dueDate, projectId, estimatedMinutes } = body

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status: status || 'NOT_STARTED',
        priority: priority || 'MEDIUM',
        dueDate: dueDate ? new Date(dueDate) : undefined,
        projectId,
        estimatedMinutes,
      },
      include: {
        project: true,
      },
    })

    return NextResponse.json(task)
  } catch (error) {
    console.error('Error creating task:', error)
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    )
  }
}
