import { FC } from "react"

const Authentication: FC = () => {
    console.log('вызов Authentication!!!!!!!!!!!')
    localStorage.clear();
    return (
        <div className="h-screen flex">
            <div className="w-full relative flex">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" >
                    <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" ></path>
                </svg>
                <div className="absolute top-0 p-8 flex justify-between  w-full items-center">
                    <h1 className="text-3xl text-white uppercase font-bold">JobSearch</h1>
                    <a
                        className="border-2 bg-indigo-300 p-2 text-indigo-900 hover:bg-purple-300 hover:text-purple-900 rounded transition duration-500 ease-in-out font-medium"
                        href="https://hh.ru/oauth/authorize?response_type=code&client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA&redirect_uri=http://localhost:3000">
                        Authentication</a>
                </div>
            </div>
        </div>
    )
}

export default Authentication