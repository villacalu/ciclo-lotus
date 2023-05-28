import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className='flex flex-col gap-4 card bg-slate-200'>
        <div className="card-body">
          <div className="card-title">Entrar</div>
          <input type="email" placeholder='email' className='input' />
          <input type="password" placeholder='password' className='input' />
        </div>
      </form>
    </main>
  )
}
