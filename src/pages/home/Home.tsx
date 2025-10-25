function Home () {
  return (
    <div
      style={{
        backgroundColor: "#312e41",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          color: "white",
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "lrem",
            paddingBottom: "lrem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Tu de novo?😒
          </h2>

          <p
            style={{
              fontSize: "1.25rem",
            }}
          >
            Manda a boa
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "lrem",
            }}
          >
            <div
              style={{
                borderRadius: "0.5rem",
                cursor: "pointer",
                border: "2px solid white",
                padding: "0.5rem 1rem",
              }}
            >
              Nova Postagem
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Página Home"
            style={{
              width: "90%",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home