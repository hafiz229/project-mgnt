import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import Header from "./components/Header";
import AddClientModal from "./components/AddClientModal";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// const client = new ApolloClient({
//   uri: "http://localhost:5000/graphql",
//   cache,
// });

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache,
});
// src/App.js (or wherever your ApolloClient is configured)
// const client = new ApolloClient({
//   uri:
//     import.meta.env.MODE === "development"
//       ? "http://localhost:5000/graphql" // Local backend
//       : "/api/graphql", // Production (relative path)
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
