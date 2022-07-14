function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicStringDate = dynamicDate.toGMTString();
    return (
        <div>
            <div>{dynamicStringDate} (dinâmico)</div>
            <div>{props.staticStringDate} (Estatico)</div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticStringDate = staticDate.toGMTString();

    return {
        props: {
            staticStringDate
        },
        revalidate: 1
    }
}

export default Tempo