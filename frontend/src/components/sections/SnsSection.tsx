import React from 'react';

const SOCIAL_LINKS = [
  {
    name: 'X (Twitter)',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H4.58l4.74 6.236L18.244 2.25zM16.828 19.75h1.54l-6.052-8.08-1.42-1.88L5.4 4.25h-1.54l6.052 8.08 1.42 1.88L16.828 19.75z" />
      </svg>
    ),
    url: 'https://x.com/nut_robopro',
    username: '@nut_robopro',
    description: '日々の活動の様子や、大会の速報などをリアルタイムで発信しています。',
    color: 'bg-black hover:bg-stone-800'
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.59c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    url: 'https://instagram.com/nut_robopro/',
    username: '@nut_robopro',
    description: '活動の裏側やメンバーの日常、イベントの様子などを写真でお届けしています。',
    color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:from-yellow-500 hover:via-red-600 hover:to-purple-700'
  }
];

export default function SnsSection() {
  return (
    <section className="py-24 bg-white" id="sns">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Social Media</h2>
          <p className="text-gray-600 text-lg">
            SNSを通じて、私たちの日常や活動の裏側をお届けしています。<br />
            ぜひフォローして、最新情報をチェックしてください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SOCIAL_LINKS.map((sns) => (
            <a
              key={sns.name}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 bg-white flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110 ${sns.color}`}>
                {sns.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{sns.name}</h3>
              <p className="text-orange-600 font-medium mb-4">{sns.username}</p>
              <p className="text-gray-600 leading-relaxed">
                {sns.description}
              </p>
              
              <div className="mt-8 flex items-center text-gray-400 group-hover:text-orange-600 font-bold text-sm transition-colors">
                FOLLOW US
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
