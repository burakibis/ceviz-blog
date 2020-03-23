import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Layout from '../layout';
import SEO from '../components/SEO';

const Arts = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photoAttrs, setPhotoAttrs] = useState([]);
  const [loading, isLoading] = useState(true);

  const FlickrAPI = () => {
    const apiKey = '8b44a3342cfca404b07f539a24bbb5ef';
    const userId = '126113118%40N08';
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;
    const FlickrImages = (farmId, serverId, id, secret) => {
      // const image = <img src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_o.jpg`} alt="" />;
      const image = {
        src: `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_b.jpg`,
        width: 3,
        height: 2,
      };
      return image;
    };
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.photos.photo.map(item => photoAttrs.push(FlickrImages(item.farm, item.server, item.id, item.secret)));
        isLoading(false);
      });
  };

  useEffect(() => {
    FlickrAPI();
  }, []);

  console.log(photoAttrs);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const Loading = () => (
    <Layout>
      <SEO title="Arts" path="/arts" />
      <div className="tab-content">
        <div className="tab-pane  active " id="alladslist">
          <div className="adds-wrapper row no-margin">
            <div className="item-list" style={{ padding: '75px' }}>
              <div className="row justify-content-center">
                <div className="spinner-border text-info">
                  <h4>Loading...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

  if (!loading) {
    return (
      <Layout>
        <SEO title="Arts" path="/arts" />
        <div>
          <Gallery photos={photoAttrs} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoAttrs.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Layout>
    );
  }
  return <Loading />;
};

export default Arts;
