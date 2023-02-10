export const MostraDados = ({dadosApi}) => {
    return(
        <div className='dados'>
          <h2>{dadosApi.city} {dadosApi.state}</h2>
          <p>distrito: {dadosApi.district}</p>
          <p>{dadosApi.address}</p>
        </div>
    )
}