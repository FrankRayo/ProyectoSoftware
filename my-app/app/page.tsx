import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold my-8">CWAEmu test Website</h1>
      <p className="mb-8">This is a sample website built with Next.js and Tailwind CSS.</p>
      
      <ol className="list-decimal list-inside mb-8">
        <li>Open the file 
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
      </div>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 justify-center"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>

      <div className="w-full flex justify-center mt-8 bg-custom">
        <img
          src="https://media.discordapp.net/attachments/430809352174305291/1254998780865151058/IMG_3025.png?ex=67127bf2&is=67112a72&hm=b4b53e40f2245ced9fa8340fd23a654555573f79fcf8563855789757b252e705&=&format=webp&quality=lossless&width=1296&height=523"
          alt="Description of the image"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full flex justify-center mt-8 bg-custom"> 
        <p className="text-center max-w-2xl mx-auto">
        CWAEmu is a non-profit, fan revival of SOE's Clone Wars Adventures Online. Players will dive into a 100% free-to-play, action-packed virtual world where they can live out the thrills and excitement of Star Wars: The Clone Wars first-hand!

Jam-packed with activities, players will battle it out alongside the familiar faces of Anakin Skywalker, Obi-Wan Kenobi, Yoda, and Ahsoka Tano. Expect fun minigames, daily activities, events, rewards, lively social environments, an in-depth housing system, and friendly competition.

As CWAEMU is an online experience, we are determined to provide a safe and rewarding environment with your children in mind.
        </p>
      </div>

      <footer>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Built with <a href="https://nextjs.org" className="underline">Next.js</a> and <a href="https://tailwindcss.com" className="underline">Tailwind CSS</a>.
        </p>
      </footer>
    </div>
  );
}