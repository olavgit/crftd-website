import Image, {StaticImageData} from "next/image";

export default function ContainerImage(props: { src: StaticImageData, alt: string, bg?: string, padding?: string }) {
    let bg = ''
    let padding = ''

    switch (props.bg) {
        case 'dark':
            bg = 'bg-black';
            break;
        case 'light':
            bg = 'bg-crftd-white';
            break;
        default:
            bg = '';
            break;
    }

    switch (props.padding) {
        case 'pt':
            padding = 'pt-12 md:pt-24';
            break;
        case 'pb':
            padding = 'pb-12 md:pb-24';
            break;
        case 'py':
            padding = 'py-12 md:py-24';
            break;
        default:
            padding = '';
            break;
    }

    let className = `${bg} ${padding}`;

    return (
        <section className={className}>
            <div className="container mx-auto px-8 md:px-4">
                <div className="overflow-hidden aspect-video">
            <Image src={props.src} alt={props.alt} data-speed="auto"/>
                </div>
            </div>
        </section>
    )
}