import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl mt-12">
        <Image
          src="/assets/home/main.jpg" // 画像ファイル名に合わせて変更
          alt="サークルのメインビジュアル"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mt-8 text-center">サークル名へようこそ！</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        サークルの紹介文やキャッチコピーをここに入れましょう。
      </p>
    </main>
  );
}
