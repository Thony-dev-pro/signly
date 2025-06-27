import './Login.css';
import { SocialButton } from '../components/common/SocialBUtton';

export const LoginPage = () => {
    return (
    <div class="login-container">
        <h2>Connexion</h2>
        <p>Connectez-vous avec :</p>
        <div class="social-buttons">
        
        <SocialButton 
            icon="https://img.icons8.com/color/16/000000/google-logo.png"
            text="Connexion avec Google"
            url="/auth/google"
            classBoot="google"
        ></SocialButton>

        <SocialButton 
            icon="https://img.icons8.com/ios-glyphs/16/ffffff/github.png"
            text="Connexion avec GitHub"
            url="/auth/github"
            classBoot="github"
        ></SocialButton>
        </div>
    </div>
    
    );
}


