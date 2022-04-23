import Navbar from '../components/navbar'

export default function content2({ }) {

    return (
        <body class="bg-teal-100">
            <Navbar />

            <div class="container my-24 px-6 mx-auto">
                <section class="mb-32 text-gray-800">
                    <h2 class="text-2xl font-bold mb-12 text-center">Latest articles</h2>
                    <div class="flex flex-wrap mb-12">

                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                            <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
                                <img src="https://mdbootstrap.com/img/new/standard/city/028.jpg" class="w-full" alt="Louvre" />
                                <a href="/content2">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                            <h3 class="text-2xl font-bold mb-4">That's the news!</h3>
                            <div class="text-red-600 text-sm mb-4 flex items-center font-medium">
                                Travels
                            </div>
                            <p class="text-gray-500 mb-6">
                                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
                                vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
                            </p>
                            <p class="text-gray-500 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                                aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
                                blanditiis cumque dolore placeat rem dignissimos?
                            </p>
                            <p class="text-gray-500 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                                aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
                                blanditiis cumque dolore placeat rem dignissimos?
                            </p>
                            <p class="text-gray-500 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                                aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
                                blanditiis cumque dolore placeat rem dignissimos?
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    )
}