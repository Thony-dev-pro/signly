export const SocialButton = ({icon, text, url ,classBoot}) => {
    return (
        <a href={url} class={`btn ${classBoot}`}>
            <img src={icon}  />
            {text}
        </a>
    );
}