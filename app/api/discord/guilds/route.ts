import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await fetch('https://discord.com/api/v10/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    const guilds = await response.json();
    return NextResponse.json(guilds);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch guilds' }, { status: 500 });
  }
}
