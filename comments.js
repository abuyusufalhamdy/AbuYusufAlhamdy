db.collection('comments').orderBy('date', 'desc').onSnapshot(snapshot => {
    const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    document.getElementById('comments').innerHTML = comments
        .filter(comment => !comment.parentId)
        .map(comment => renderComment(comment))
        .join('');
});
