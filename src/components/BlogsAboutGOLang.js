export const BlogsAboutGOLang = [
  {
    id: 1,
    topic: "Introduction to GoLang",
    why: "GoLang is a statically typed, compiled language designed for simplicity and efficiency.",
    details: "GoLang, also known as Go, was created at Google to address modern software development challenges. It is known for its fast compilation, built-in concurrency support, and clean syntax.",
    links: [
      { name: "Official Website", url: "https://golang.org" },
      { name: "GoLang Documentation", url: "https://golang.org/doc" },
    ],
    time: "10 min read",
    howToDo: "To get started, install Go from the official website and follow the 'Getting Started' guide.",
  },
  {
    id: 2,
    topic: "Concurrency in GoLang",
    why: "GoLang's concurrency model is one of its standout features, making it ideal for building scalable systems.",
    details: "GoLang uses goroutines and channels to handle concurrency. Goroutines are lightweight threads, and channels allow safe communication between them.",
    links: [
      { name: "Concurrency in Go", url: "https://golang.org/doc/effective_go#concurrency" },
      { name: "Go by Example: Goroutines", url: "https://gobyexample.com/goroutines" },
    ],
    time: "15 min read",
    howToDo: "Learn about goroutines and channels by writing small programs that demonstrate their usage.",
  },
  {
    id: 3,
    topic: "Building a REST API with GoLang",
    why: "GoLang is a great choice for building high-performance REST APIs due to its simplicity and speed.",
    details: "Using frameworks like Gin or the standard library, you can quickly build RESTful APIs in GoLang.",
    links: [
      { name: "Gin Web Framework", url: "https://github.com/gin-gonic/gin" },
      { name: "Building a REST API in Go", url: "https://blog.logrocket.com/how-to-build-a-rest-api-with-golang-using-gin/" },
    ],
    time: "20 min read",
    howToDo: "Start by setting up a basic HTTP server using the `net/http` package, then expand it into a full REST API.",
  },
];