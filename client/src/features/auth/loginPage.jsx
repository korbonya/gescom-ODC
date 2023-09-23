
export default function LoginPage() {
    return (
        <div className="min-h-screen w-full grid grid-cols-2 place-items-center">
                <div className="px-8 w-full flex flex-col">
                        <h1 className="text-3xl font-bold text-center mb-4">Se connecter</h1>
                        <form action="" className="space-y-4 w-full max-w-lg">
                                <div className="flex flex-col space-y-2">
                                        <label className="font-semibold text-lg w-full" htmlFor="email">Email</label>
                                        <input  type="email" name="email" id="email" className="border border-gray-400 rounded-lg p-2" />
                                </div>
                                <div className="flex flex-col space-y-2 w-full">
                                        <label htmlFor="password">Mot de passe</label>
                                        <input type="password" name="password" id="password" className="border border-gray-400 rounded-lg p-2" />
                                </div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Se connecter
                                </button>
                        </form>
                </div>
                <div>
                        <img src="/src/assets/images/login.jpg" alt="" />
                </div>
        </div>
    )
}
