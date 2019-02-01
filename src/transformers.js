const transform = {
  note: notes => {
    if (!Array.isArray(notes)) {
      notes = [notes];
    }
    return notes.map(note => {
      return {
        id: note._id,
        title: note.title,
        body: note.body,
        tags: note.tags,
        private: note.private,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt
      };
    });
  }
};

module.exports = transform;
