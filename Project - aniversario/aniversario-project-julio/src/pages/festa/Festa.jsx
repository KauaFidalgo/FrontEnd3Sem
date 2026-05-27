import CountdownTimer from "../../components/countdownTimer/CountdownTimer"

import API from "../../services/api"
import FestaChat from "../../components/festaChat/FestaChat"
import FestaPlayer from "../../components/festaPlayer/FestaPlayer"

import "./Festa.css"

function Festa() {

    return (
        <section className="festa-page">

            <button
                className="back-home-btn"
                onClick={() => window.location.href = "/"}
            >
                ⬅ VOLTAR
            </button>

            <div className="festa-top">

                <h1>🔥 FESTA AO VIVO 🔥</h1>

                <CountdownTimer />

            </div>

            <div className="festa-content">

                <FestaChat />

                <FestaPlayer />

            </div>

        </section>
    )
}

export default Festa