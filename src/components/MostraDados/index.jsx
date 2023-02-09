export const MostraDados = ({dadosApi}) => {
    return(
        <div className='dados'>
          <h2>{dadosApi.city} <span>{dadosApi.state}</span> </h2>
          <p>distrito: {dadosApi.district}</p>
          <p>{dadosApi.address}</p>
        </div>
    )
}