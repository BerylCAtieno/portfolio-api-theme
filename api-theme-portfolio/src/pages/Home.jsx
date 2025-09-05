import Layout from "../components/Layout.jsx"

function Home() {
    return (
    <Layout>
      <div className="content">
        <h1 className="greeting">
          Hi, I am <span className="name">Beryl Atieno</span>
        </h1>
        <p className="title">Backend Developer</p>
        <p className="description">
          I specialize in <span className="highlight">API design and development </span> 
          using Go and TypeScript, crafting robust and scalable backend systems. 
          I'm passionate about <span className="highlight">open source projects</span> 
          and believe in building software that makes a difference.
        </p>
      </div>
    </Layout>
  );
}

export default Home