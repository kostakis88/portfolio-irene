import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioHeader from '../components/PortfolioHeader';
import ContentSection from '../components/ContentSection';
import Button from '../components/Button';

const WorkDetails = () => {
  const { id } = useParams();
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/workDetails.json');
        const data = await response.json();

        const work = data.workDetails.find((item) => item.id === parseInt(id));

        if (work) {
          const imageImports = async (path) => {
            try {
              const importedImage = await import(`../${path}`);
              return importedImage.default || importedImage;
            } catch (err) {
              console.error(`Error importing image at ${path}:`, err);
              return null;
            }
          };

          work.image.src = await imageImports(work.image.src);

          const updatedContent = await Promise.all(
            work.content.map(async (item) => {
              if (item.type === 'image' && item.src) {
                return {
                  ...item,
                  src: await imageImports(item.src),
                };
              }
              return item;
            })
          );

          work.content = updatedContent;

          setWorkData(work);
        }
      } catch (error) {
        console.error('Error fetching work details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!workData) return <p>Loading...</p>;

  return (
    <div className="work-details">
      <PortfolioHeader
        headerData={{
          title: workData.title,
          subtitle: workData.subtitle,
          tags: workData.tags,
        }}
        imageData={workData.image}
      />
      <section className="section-portfolio-content">
        <ContentSection content={workData.content} />
      </section>
      <div className="margin-bottom margin-large">
        <div className="button-group is-center">
          <Button label="View More Work" />
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
