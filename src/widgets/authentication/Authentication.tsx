import { FC } from "react"

const Authentication: FC = () => {
    console.log('вызов Authentication!!!!!!!!!!!')
    localStorage.clear();

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                    <div className="max-w-md mx-auto">
                        <div className="font-bold text-6xl">
                            <span ><span className="text-orange-500">Job</span>
                                <span className="text-blue-500">Search</span></span>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div className="relative">
                                    <a
                                        className="border-2 bg-indigo-300 p-2 text-indigo-900 hover:bg-purple-300 hover:text-purple-900 rounded transition duration-500 ease-in-out font-medium"
                                        href="https://hh.ru/oauth/authorize?response_type=code&client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA&redirect_uri=http://localhost:3000">
                                        Вход</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Authentication