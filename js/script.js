document.addEventListener('DOMContentLoaded', function() {
    const contentData = {
        'sowing-fostering': {
            title: 'Sowing And Fostering',
            intro: "At Saffire, this principle goes beyond just planting seeds. It's about proactively introducing new, positive ideas and providing the ongoing care necessary for them to flourish, creating a foundation for long-term health and community.",
            sections: [
                {
                    heading: 'Sowing: Introducing New Ideas',
                    icon: 'icon-leaf',
                    color: 'text-green-400 bg-green-900/50',
                    points: [
                        { point: 'Adopting Regenerative Farming' },
                        { point: 'Building the Synapse Greenhouse' },
                        { point: 'Cultivating Relationships' }
                    ]
                },
                {
                    heading: 'Fostering: Nurturing Growth',
                    icon: 'icon-heart',
                    color: 'text-red-400 bg-red-900/50',
                    points: [
                        { point: 'AI-Driven Land Nurturing' },
                        { point: 'Utilizing Smart Hoop Tunnels' },
                        { point: 'Building an Informed Community' }
                    ]
                }
            ]
        },
        'fruitful-interactions': {
            title: 'Fruitful Interactions',
                intro: "This is the Saffire guiding philosophy for relationships. It champions a holistic approach where AI helps us understand a larger, interconnected system, nurturing positive connections at every level.",
            sections: [
                {
                    heading: 'Ecological Interactions',
                    icon: 'icon-leaf',
                    color: 'text-green-400 bg-green-900/50',
                    points: [
                        { point: 'AI-Powered Apiary' },
                        { point: 'AI-Assisted Pest Management'}
                    ]
                },
                {
                    heading: 'Human Interactions',
                    icon: 'icon-community',
                    color: 'text-sky-400 bg-sky-900/50',
                    points: [
                        { point: 'Creating a safe and respectful environment for all team members.'},
                        { point: 'AI-Powered Knowledge Sharing'}
                    ]
                }
            ]
        },
        'respecting-everything': {
            title: 'Respecting Everything',
            intro: "This is the core ethical foundation of our philosophy. It mandates that Saffire operates with a profound and active respect for every element it interacts with, using AI to deepen that respect.",
            sections: [
                {
                    heading: 'Respect for the Land',
                    icon: 'icon-leaf',
                    color: 'text-green-400 bg-green-900/50',
                    points: [
                        { point: 'AI-Optimized Water Use' },
                        { point: 'Reducing Food Miles' },
                        { point: 'Precision Agriculture with The Saffire Sentinel' },
                        { point: 'Prioritizing Long-Term Ecological Balance' }
                    ]
                },
                {
                    heading: 'Respect for Life',
                    icon: 'icon-heart',
                    color: 'text-red-400 bg-red-900/50',
                    points: [
                        { point: 'AI-Assisted Animal Welfare' },
                        { point: 'AI-Assisted Hive Health' },
                        { point: 'Automated Well-being in The Sunrise Coop' },
                        { point: 'Recognizing and preserving biodiversity' }
                    ]
                },
                {
                    heading: 'Respect for the Community',
                    icon: 'icon-community',
                    color: 'text-sky-400 bg-sky-900/50',
                    points: [
                        { point: 'Year-Round Local Food' },
                        { point: 'Operating with Radical Transparency' },
                        { point: 'Ensuring positive community impact' }
                    ]
                }
            ]
        }
    };

    const contentDisplay = document.getElementById('content-display');
    const navCards = document.querySelectorAll('.nav-card');

    function updateContent(contentId) {
        const data = contentData[contentId];
        if (!data) return;

        let contentHTML = `
            <div class="content-card border-t border-slate-700 mt-12 pt-12">
                <h2 class="text-3xl font-bold text-white mb-2">${data.title}</h2>
                <p class="text-slate-400 mb-8 max-w-3xl">${data.intro}</p>
                <div class="space-y-6">
        `;
        
        data.sections.forEach(section => {
            contentHTML += `
                <div class="flex items-start">
                    <div class="icon-wrapper flex items-center justify-center rounded-full ${section.color} mr-5">
                            <span class="icon ${section.icon}"></span>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-slate-200 mb-2">${section.heading}</h4>
                        <ul class="list-disc list-inside space-y-1 text-slate-400">
            `;
            section.points.forEach(item => {
                contentHTML += `<li>${item.point}</li>`;
            });
            contentHTML += `</ul></div></div>`;
        });

        contentHTML += '</div></div>';
        
        contentDisplay.classList.add('fade-out');

        setTimeout(() => {
            contentDisplay.innerHTML = contentHTML;
            contentDisplay.classList.remove('fade-out');
        }, 300);
    }
    
    navCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const contentId = card.dataset.content;
            updateContent(contentId);
                // Smooth scroll to the content area after it's been rendered
            setTimeout(() => {
                document.getElementById('content-display').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 310);
        });
    });
});
