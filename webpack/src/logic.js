function publish(value)
{
    const noteHead = document.createElement('h2')
    const p = document.createElement('p')
    noteHead.textContent = 'PUBLISHED NOTE:'
    p.textContent = value;
    document.getElementById('publishedNotes').append(noteHead,p)
}
export {publish}