import React from "react";
import confetti from "canvas-confetti";


const BirthdayCard = () => {
    const launchConfetti = () => {
        confetti({
            particleCount: 700,
            spread: 500,
            origin: { y: 0.5 },
        });
    };

    return (

        <>
            <div class="flip-card">
                <div class="flip-card-inner">

                    <div class="flip-card-front">
                        <h1 className="title"><b>🎂 Happy Birthday! 🎂</b></h1>
                        <p className="text">Hover to reveal your surprise! 🎁</p>
                    </div>


                    <div class="flip-card-back">
                        <b><h1 className="title">🎉 Surprise! 🎉</h1></b>
                        <p className="text">Wishing you a day filled with joy and love! 💖</p>
                        <div class="balloons">
                            <div class="balloon b1"></div>
                            <div class="balloon b2"></div>
                            <div class="balloon b3"></div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
};

export default BirthdayCard;
