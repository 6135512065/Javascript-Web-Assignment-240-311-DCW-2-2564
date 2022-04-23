const Navbar = () => (

    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <br></br>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Welcome to Phi Phi Island</span>
        </div>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">By : Faruslan Waming 6135512065 CoE61</span>
        </div>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">240-311 DISTRIBUTED COM&WEB TECHNO</span>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            </div>
            <div>
                <a href="/" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                    Home</a>
            </div>
            <div>
                <a href="/profile" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                    Profile</a>
            </div>
            <div>
                <a href="/getConfig" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                    Config</a>
            </div>
            <div>
                <a href="/register" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                    Register</a>
            </div>
            <div>
                <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                    Login</a>
            </div>
            <div>
                <a href="/logout" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    Logout</a>
            </div>
        </div>
    </nav>
)

export default Navbar