document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = urlParams.get('post');

    const postDetails = [
        {
            title: "'let' me be a 'const'(ant), not a 'var'(iable)!",
            author:"Srishti Gupta",
            content: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different. In today's digital landscape, building a successful tech blog with a substantial following requires a combination of strategies and consistent effort.Quality Content Is Key: The foundation of any successful tech blog is high-quality content. Ensure that your blog posts are well-researched, informative, and provide value to your readers. In-depth articles, tutorials, and reviews tend to attract more views.SEO Optimization: Utilize search engine optimization (SEO) techniques to make your content more discoverable. Focus on optimizing keywords, meta descriptions, and using relevant tags. SEO helps your blog rank higher in search engine results, increasing its visibility.Engage on Social Media: Leverage the power of social media platforms to promote your blog posts. Share snippets, eye-catching visuals, and engage with your audience on platforms like Twitter, LinkedIn, and Facebook. Create a consistent posting schedule to keep your followers informed.Guest Posting: Collaborate with other tech bloggers or websites in your niche by offering to write guest posts. This not only exposes your content to a broader audience but also establishes your authority in the field.Email Marketing: Build an email list and regularly send newsletters to your subscribers. Share your latest blog posts, updates, and exclusive content with your email audience. Email marketing is a powerful tool for retaining readers.Interact with Your Audience: Respond to comments on your blog and engage with readers. Encourage discussions and create a sense of community around your blog. Engaged readers are more likely to return and share your content.Visual Content: Incorporate visuals such as images, infographics, and videos into your blog posts. Visual content is more shareable and can capture the attention of a broader audience.Collaborate and Network: Network with other bloggers, attend tech-related events, and join relevant online communities. Building relationships in the tech industry can open up opportunities for collaboration and cross-promotion.Monitor Analytics: Use analytics tools to track the performance of your blog. Pay attention to which posts are receiving the most views and engagement. Adjust your content strategy based on these insights.Stay Updated: Tech is an ever-evolving field. Stay updated with the latest trends, technologies, an news. Publishing timely and relevant content can attract more views from tech enthusiasts.",
        },
        {
            title: "What is linting and how can it save you time?",
            author:"Colby Fayock",
            content: "One of the biggest challenges in software development is time. It's something we can't easily get more of, but linting can help us make the most out of the time we have.Linting is like having a vigilant code companion who helps you spot errors and inconsistencies in your code, ultimately saving you precious time and headaches during the development process.At its core, linting is a static code analysis process where a tool, known as a linter, scans your source code for potential issues, style violations, and programming errors. These issues can range from simple syntax errors to more complex logic problems that might otherwise go unnoticed until runtime. So, how exactly can linting be your time-saving superhero?Syntax Check: Linters are your first line of defense against syntax errors. They catch missing semicolons, mismatched parentheses, and other common syntax mistakes, preventing frustrating debugging sessions later.Code Consistency: Maintaining a consistent coding style across your project can be challenging, especially when multiple developers are involved. Linters enforce coding standards, ensuring that everyone follows the same guidelines. This consistency improves code readability and collaboration.Error Prevention: Linters identify potential runtime errors before your code ever executes. This proactive approach helps you catch and fix issues early in the development process, saving you from the headache of debugging later.Performance Optimization: Some linters can help you write more efficient code by highlighting areas where you can improve performance. This optimization can lead to faster-running applications.Security: Linters can also help in identifying security vulnerabilities in your code. They can spot unsafe coding practices and suggest more secure alternatives, making your applications less susceptible to attacks. Customization: Linters are highly configurable, allowing you to tailor them to your project's specific needs. You can enable or disable rules, set custom rules, and adapt the linter to match your coding style and requirements.Integration: Most modern development environments and text editors offer seamless integration with linters. This means you can receive real-time feedback as you write code, reducing the need for separate linting tools and manual checks."
        },
        {
            title : "How to Get More Views on Your Tech Blog",
            author: "Yazeed Bzadough",
            content: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry. High-Quality Content: Quality is king. Craft informative, well-researched, and engaging content that provides real value to your readers. In the tech world, readers appreciate in-depth articles, how-to guides, and insightful reviews.Search Engine Optimization (SEO): Optimize your blog posts for search engines. Use relevant keywords, optimize meta descriptions, and create SEO-friendly URLs. This ensures that your content ranks higher in search engine results.Social Media Promotion: Leverage the power of social media platforms like Twitter, LinkedIn, and Facebook. Share your blog posts, engage with your audience, and use trending hashtags to widen your reach.Guest Blogging: Collaborate with other tech bloggers or tech-related websites by contributing guest posts. This not only exposes your content to a new audience but also establishes your authority in the field.Email Marketing: Build and nurture an email subscriber list. Regularly send out newsletters containing your latest blog posts, updates, and exclusive content. Email marketing is a powerful tool for retaining readers.Visual Content: Incorporate visuals such as images, infographics, and videos into your blog posts. Visual content is more shareable and can captivate your audience.Networking: Network with fellow tech enthusiasts and bloggers. Attend tech events, webinars, and online communities related to your niche. Building relationships can lead to collaborations and cross-promotion opportunities.Comments and Engagement: Respond to comments on your blog and engage with your readers. Encourage discussions and create a sense of community around your blog. Engaged readers are more likely to return and share your content.Stay Updated: The tech industry is ever-evolving. Stay up-to-date with the latest trends, technologies, and news. Posting timely and relevant content can attract more views from tech enthusiasts.Analytics Monitoring: Use analytics tools to track the performance of your blog. Analyze which posts receive the most views and engagement. Adjust your content strategy based on these insights.Collaborations and Interviews: Collaborate with experts in your tech niche for interviews or joint projects. This can attract their followers to your blog.User-Friendly Design: Ensure that your blog has a user-friendly design and is optimized for mobile devices. A well-designed, responsive blog enhances the user experience.",
        },
        {
            title: "How to write easily describable code",
            author: "Cedd Burge",
            content: "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.Writing code that is easily describable is a fundamental skill for every developer. Code readability and maintainability are crucial not only for your own understanding but also for collaboration with other team members. Follow these tips to make your code more comprehensible:Use Descriptive Variable and Function Names: Choose meaningful names for your variables and functions that reflect their purpose and usage. Avoid vague or cryptic names that require additional mental effort to decipher.Comments and Documentation: Add comments to explain complex logic, algorithms, or any non-obvious code sections. Use clear and concise language in your comments. Additionally, provide high-level documentation that describes the purpose and usage of your code.Consistent Formatting: Maintain a consistent code formatting style throughout your project. Use consistent indentation, line spacing, and naming conventions. This consistency enhances code readability.Modularize Your Code: Break your code into smaller, modular functions or classes. Each unit should have a single responsibility, making it easier to understand and test.Avoid Magic Numbers and Strings: Replace magic numbers or strings with named constants or variables. This practice makes your code self-explanatory and allows for easier updates in the future.Avoid Nested Loops and Conditionals: Limit the depth of nested loops and conditionals to improve code readability. If you have deeply nested structures, consider refactoring to simplify the logic.Simplify Complex Expressions: Break down complex mathematical or logical expressions into smaller, more manageable parts. Use intermediate variables with descriptive names to clarify the intent.Follow a Style Guide: Adhere to a recognized coding style guide for your programming language, such as PEP 8 for Python or the JavaScript Standard Style. Style guides provide consistent naming and formatting conventions.Unit Tests and Test-Driven Development: Write unit tests alongside your code using a test-driven development (TDD) approach. Tests serve as living documentation and help ensure your code behaves as expected.Version Control and Meaningful Commit Messages: Use version control systems like Git and commit your changes with meaningful messages. Describe why the change was made, not just what changed.Refactor as Needed: Refactoring is the process of improving code without changing its external behavior. If you encounter code that is hard to describe or understand, take the time to refactor it into a more comprehensible form.Peer Reviews: Encourage peer code reviews within your development team. Fresh eyes can spot issues or suggest improvements that you might have missed.Educate Yourself: Continuously improve your coding skills by learning from experienced developers, reading books, and studying well-structured open-source projects."
        },
        {
            title: "Everything you should know about 'module' & 'require' in Node.js",
            author:"Srishti Gupta",
            content: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you've created a module named xyz.Node.js, the runtime environment built on Chrome's V8 JavaScript engine, introduces a powerful concept known as 'modules' and the 'require' function to manage dependencies and structure your applications efficiently. Understanding these fundamental concepts is essential for Node.js developers:1. Modularity with CommonJS:Node.js follows the CommonJS module system, which allows developers to break their code into reusable modules. Each module encapsulates specific functionality, promoting clean and maintainable code.2. The 'require' Function:The 'require' function is the gateway to loading modules in Node.js. It allows you to include external modules or files into your application by specifying their paths. For example, 'require('fs')' loads the built-in 'fs' module for file system operations.3. Core Modules and npm Packages:Node.js provides a set of core modules for essential functionalities like file I/O, networking, and more. Additionally, developers can leverage the Node Package Manager (npm) to access thousands of third-party packages created by the community.4. Creating Your Modules:You can create your custom modules by defining functions, objects, or variables within a file. To make them accessible to other parts of your application, use 'module.exports' to export them.5. Module Resolution:Node.js uses a specific algorithm to resolve module paths. It searches for modules in core modules, local files, and within 'node_modules' directories. Understanding this resolution process is crucial when specifying module paths.6. Circular Dependencies:Avoid circular dependencies, where Module A requires Module B, and Module B requires Module A. These can lead to unpredictable behavior. Proper structuring and planning can help prevent such situations.7. ES6 Modules:Node.js introduced support for ES6 (ECMAScript 2015) modules using the 'import' and 'export' statements. While CommonJS-style 'require' is prevalent, ES6 modules offer a more modern and standardized approach.8. Asynchronous Loading:Module loading in Node.js is asynchronous by nature. This means that 'require' calls do not block the execution of the rest of your code. Understanding this behavior is crucial when working with modules that perform I/O operations.9. Global Objects:Some objects are available globally in Node.js without the need for 'require,' such as 'console' and 'process.' They provide essential functionalities for interacting with the environment and debugging.10. Best Practices:Follow best practices when structuring your Node.js applications. Organize your code into directories, use meaningful module names, and manage dependencies effectively to keep your codebase maintainable.Mastering 'module' and 'require' in Node.js is a key step toward becoming a proficient Node.js developer. These concepts enable you to build scalable, organized, and maintainable applications in the Node.js ecosystem."
        }
    ];

    // Get the post details based on the selected index
    const selectedPost = postDetails[postIndex - 1];

    if (selectedPost) {
        document.getElementById('post-title').textContent = selectedPost.title;
        document.getElementById('post-author').textContent = selectedPost.author;
        document.getElementById('post-content').textContent = selectedPost.content;
    }
});



function ebtn() {
    document.getElementById("e-btn").style.display = "none"
    document.getElementById("s-btn").style.display = "block"
    document.getElementById('post-title').style.border = "2px solid pink"
    document.getElementById("post-content").style.border ="2px solid pink"

    const titleElement = document.getElementById('post-title');
    const contentElement = document.getElementById('post-content');

    // Toggle contenteditable attribute 
    const isEditable = titleElement.contentEditable === 'true';
    titleElement.contentEditable = !isEditable;
    contentElement.contentEditable = !isEditable;
}

function sbtn(){
    document.getElementById("e-btn").style.display = "block"
    document.getElementById("s-btn").style.display = "none"
    document.getElementById('post-title').style.border = "none"
    document.getElementById("post-content").style.border ="none"

    const titleElement = document.getElementById('post-title');
    const contentElement = document.getElementById('post-content');

    titleElement.contentEditable = 'false';
    contentElement.contentEditable = 'false';
}

// -----------likes js
let likeCount = 0;

function likePost() {
    likeCount++;

    const likeText = document.getElementById('like-cnt');
    const likeButton = document.getElementById('like-btn');
    const likedButton = document.getElementById('liked-btn')

    if (likeCount === 1) {
        likeText.textContent = '1 person likes this!';
        // likeButton.textContent = 'Liked!';
        likeButton.style.display = "none"
        likedButton.style.display = "block"
     } else {
        likeText.textContent = likeCount + ' people like this!';
        likeButton.textContent = 'Liked!';
    }
}

// --------------------comment js

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const allComments = document.getElementById('all-comments');

    const commentText = commentInput.value.trim(); // Get the typed comment

    if (commentText !== '') {
        const commentDiv = document.createElement('div'); // Create a new comment div
        allComments.style.display = "block"
        commentDiv.textContent = commentText;
        commentDiv.style.backgroundColor = "white"
        commentDiv.style.padding = "15px"
        commentDiv.style.fontSize = "20px"
        commentDiv.style.marginBottom = "10px"
        allComments.prepend(commentDiv); // Add the new comment at the top

        commentInput.value = ''; // Clear the input box after adding the comment
    }
}