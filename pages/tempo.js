function Tempo(props) {
    const dynamicDate = new Date;
    const dynamicStringDate = dynamicDate.toGMTString();
    return (
        <div>
            {dynamicStringDate} (dinâmico)
        </div>
    )
}

export function getStaticProps{
    const staticDate = new Date;
    const staticStringDate = staticDate.toGMTString();

    return {
        props: {
            staticStringDate
        }
    }
}

export default Tempo