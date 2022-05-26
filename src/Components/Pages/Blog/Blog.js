import React from 'react';

const Blog = () => {
    return (
        <div className='container-lg'>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">Blogs</h2>
            <div className="w-9/12 mx-auto">
                <h3 className="text-lg text-left text-emerald-500  font-bold py-2">1. How will you improve the performance of a React Application?</h3>
                <div className='pl-5'>
                    <h3 className="text-lg text-black text-left font-bold">By following the steps we will improve the performance of Application:</h3>
                    <h3 className="text-lg text-black text-left font-normal">1.Keeping component state local where necessary</h3>
                    <h3 className="text-lg text-black text-left font-normal">2.Memoizing React components to prevent unnecessary re-renders</h3>
                    <h3 className="text-lg text-black text-left font-normal">3.Code-splitting in React using dynamic</h3>
                    <h3 className="text-lg text-black text-left font-normal">4.Windowing or list virtualization in React</h3>
                    <h3 className="text-lg text-black text-left font-normal">5.Lazy loading images in React</h3>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <h3 className="text-lg text-left text-emerald-500  font-bold py-2"> 2. What are the different ways to manage a state in a React application?</h3>
                <div className='pl-5'>
                    <h3 className="text-lg text-black text-left font-bold">There are many different ways to manage a state in React Application:</h3>
                    <h3 className="text-lg text-black text-left font-normal">1.useState() useState() hook allows us to create and mange a state variable that can be a simple JavaScript primitive or an object. ... </h3>
                    <h3 className="text-lg text-black text-left font-normal">2.useReducer() useReducer() is used when we would rather modify state via reducers and actions. ...</h3>
                    <h3 className="text-lg text-black text-left font-normal">3. useRef() ...</h3>
                    <h3 className="text-lg text-black text-left font-normal">4.useContext() ...</h3>
                    <h3 className="text-lg text-black text-left font-normal">5. props.</h3>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <h3 className="text-lg text-left text-emerald-500  font-bold py-2">3. How does prototypical inheritance work?</h3>
                <div className='pl-5'>
                    <h3 className="text-lg text-black text-left font-normal">JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</h3>
                    <h3 className="text-lg text-black text-left font-normal">For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.</h3>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <h3 className="text-lg text-left text-emerald-500  font-bold py-2">4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts`?</h3>
                <div className='pl-5'>
                    <h3 className="text-lg text-black text-left font-normal"> The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn't have to be an array. We can keep a number,object,or a string if that's all we need. useState()  returns a pair of values: the current state and a function that updates it. This is why we write const [products, setProducts] = useState([]). This is similar to this.state.products and this.setProducts in a class, except we get them in a pair.</h3>

                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <h3 className="text-lg text-left text-emerald-500  font-bold py-2">5. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <div className='pl-5'>
                    <h3 className="text-lg text-black text-left font-normal">
                        const apple =  products.find(product =&gt; product.name === "Iphone");
                    </h3>

                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <h3 className="text-lg text-left text-emerald-500  font-bold py-2">6. What is a unit test? Why should write unit tests?</h3>
                <div className='pl-5'>
                    <h3 className="text-lg text-black text-left font-normal py-2">
                        A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.
                    </h3>
                    <h3 className="text-lg text-black text-left font-normal py-2">
                        Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.

                    </h3>
                    <h3 className="text-lg text-black text-left font-normal py-2">
                        Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility.
                    </h3>

                </div>
            </div>
        </div>
    );
};

export default Blog;