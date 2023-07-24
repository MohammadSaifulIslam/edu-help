import { useEffect, useState } from "react";
import ResearchPaperCard from "../../../components/ResearchPaperCard/ResearchPaperCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ResearchPaper = () => {
    const [researchPapers, setResearchPapers] = useState([]);
    useEffect(() => {
        fetch('/research_papers.json')
            .then(res => res.json())
            .then(data => setResearchPapers(data))
    }, [])

    return (
        <section className="my-container mt-20">
            <SectionTitle title={'Reseach Paper'} subTitle={'There are some research paper links that were researched by the university students the website is recommending.'} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    researchPapers.map(paper => <ResearchPaperCard key={paper.id} paper={paper}></ResearchPaperCard>)
                }
            </div>
        </section>
    );
};

export default ResearchPaper;