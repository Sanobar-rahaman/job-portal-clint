


const Blog = () => {
    return (
        <div>
            <h2 className=" text-xl font-bold">
                Q-1:What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>
            <p><span className=" font-bold">Ans:</span> <br />
            Access tokens serve as short-lived credentials that grant limited access to specific resources and are typically stored on the client-side, facilitating access to protected data or functionalities during an authenticated session. Conversely, refresh tokens are long-lived credentials used to obtain new access tokens once the initial access token expires. While access tokens are commonly stored securely on the client-side, such as in browser memory, refresh tokens, due to their sensitivity and the potential for indefinite access, are recommended to be stored and managed in more secure server-side environments to prevent unauthorized access and enhance overall security.
            </p>
            <h2 className=" text-xl">
                Q-2 :What is express js? What is Nest JS
            </h2>
            <p>
                <span className=" font-bold">Ans</span><br />
               <span className=" font-bold"> Express js :</span>Express.js is a minimalist and flexible Node.js web application framework that provides a robust set of features to develop web applications and APIs. It is not a strict framework but more of a web application framework that sits on top of Node.js, simplifying the process of creating web servers and defining routes. It offers a range of HTTP utility methods and middleware to create powerful APIs. Express.js is known for its simplicity and ease of use, making it a popular choice for building web applications in the Node.js ecosystem.
               <br />
               <span className=" font-bold">Next Js :</span>NestJS,is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is heavily inspired by Angular and is built on top of Express.js. NestJS utilizes TypeScript as its primary language and takes advantage of its strong typing to enhance the development experience. It offers a modular structure, dependency injection, and a powerful CLI (Command Line Interface) that helps in creating enterprise-grade applications by combining the elements of OOP Object-Oriented Programming, functional programming, and functional reactive programming.

            </p>
            <h2 className=" text-xl font-bold">Explanation Of my code</h2>
            <p>In my code i use React js libary as my fontend code,i use  differen type of  component libary such as sweet alert,react hot tost etc , fot back-end i use nodes js with express Js</p>
        </div>
    );
};

export default Blog;