// Sizes values are out of 100
export const sponsors = [
  {
    name: 'Medtronic',
    size: 60,
    url: 'http://medtronic.com'
  },
  {
    name: 'BlueCanyon',
    size: 30,
    url: 'http://bluecanyontech.com/'
  },
  {
    name: 'Google',
    size: 40,
    url: 'https://www.google.com/'
  },
  {
    name: 'Sketchup',
    size: 40,
    url: 'https://www.sketchup.com/'
  },
  {
    name: 'Ball',
    size: 30,
    url: 'http://www.ball.com/aerospace'
  },
  {
    name: 'Cosmos',
    size: 20,
    url: 'http://cosmospizza.com/'
  },
  {
    name: 'Madwire',
    size: 20,
    url: 'https://www.madwire.com/'
  },
  {
    name: 'NeyaSystems',
    size: 20,
    url: 'http://neyasystems.com/'
  },
  {
    name: 'Spire',
    size: 20,
    url: 'https://spire.com/'
  },
  {
    name: 'NIST',
    size: 20,
    url: 'http://www.nist.gov/'
  },
  {
    name: 'McGuckin',
    size: 20,
    url: 'https://www.mcguckin.com/'
  },
  {
    name: 'TheSink',
    size: 15,
    url: 'https://thesink.com/'
  }
];

// TODO: run before build so user doesn't have to do it

function importAll(r) {
  return r.keys().map(r);
}

const importPhotoGallery = (images, thumbnailImages) => {
  return images.map((image, index) => {
    return {
      src: image,
      thumbnail: thumbnailImages[index]
    };
  });
};

export const galleries = [
  {
    name: '2018 competition',
    images: importPhotoGallery(importAll(require.context("./images/2018-comp/", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2018-comp/thumbnails/", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2018 building',
    images: importPhotoGallery(importAll(require.context("./images/2018-build", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2018-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2017 competition',
    images: importPhotoGallery(importAll(require.context("./images/2017-comp", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2017-comp/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2017 building',
    images: importPhotoGallery(importAll(require.context("./images/2017-build", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2017-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 competition',
    images: importPhotoGallery(importAll(require.context("./images/2016-comp", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2016-comp/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 building',
    images: importPhotoGallery(importAll(require.context("./images/2016-build", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2016-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 Bag Night',
    images: importPhotoGallery(importAll(require.context("./images/2016-bag", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2016-bag/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: 'Off season',
    images: importPhotoGallery(importAll(require.context("./images/off-season", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/off-season/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  }
];
