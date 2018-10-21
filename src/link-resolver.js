const linkResolver = (doc) => {

  if (doc.type === 'home') {
    return '/';
  }
  // Default to the root
  return '/';
}

export default linkResolver