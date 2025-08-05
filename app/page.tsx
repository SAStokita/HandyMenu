import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col w-[480px] h-[800px] bg-[#FAF5E9] overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-start h-16 bg-blue-600 px-4 text-white text-xl font-bold">
        <span>メニュー</span>
      </header>

      {/* Main Content - Buttons */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 gap-6">
        <Link
          href="https://v0-jy-delta.vercel.app/"
          className="w-full max-w-[300px] h-20 bg-blue-500 text-white text-2xl font-bold rounded-lg flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
          prefetch={false}
        >
          入荷処理
        </Link>
        <Link
          href="https://v0-lw-nu.vercel.app/"
          className="w-full max-w-[300px] h-20 bg-blue-500 text-white text-2xl font-bold rounded-lg flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
          prefetch={false}
        >
          出庫処理
        </Link>
        <Link
          href="https://v0-xh-sand.vercel.app/"
          className="w-full max-w-[300px] h-20 bg-blue-500 text-white text-2xl font-bold rounded-lg flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
          prefetch={false}
        >
          棚卸処理
        </Link>
        <Link
          href="https://v0-ok-theta.vercel.app/"
          className="w-full max-w-[300px] h-20 bg-blue-500 text-white text-2xl font-bold rounded-lg flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
          prefetch={false}
        >
          在庫確認
        </Link>
      </main>
    </div>
  )
}
