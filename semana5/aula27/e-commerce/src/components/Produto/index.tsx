import axios from "axios"
import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

const Produto = () => {
    const params = useParams<any>()
    console.log(params.slug)
    const [dados, setDados] = React.useState<any>()

    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.slug}`)
            .then(resposta => setDados(resposta.data))
    }, [params.slug])
    return (
        <>
            <Helmet>
                <title>{dados?.title}</title>
            </Helmet>
            
            <main className="container text-center my-0">
                <div className="row row-cols-1 row-cols-md-1 mb-1 text-center">
                    <div className="col">
                        <div className="card mb-12 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 fw-normal text-muted">Produto escolhido: {dados?.title}</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">Preço: R$ {dados?.price}</h1>
                                <p>{dados?.description}</p>
                                <img className="img-fluid-big" src={dados?.image} alt={dados?.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Produto