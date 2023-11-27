import React from 'react'

function AirtableForm(props) {
  return (
    <>
      <iframe
        className="airtable-embed"
        src={`https://airtable.com/embed/${props.base_id}/${props.table}?backgroundColor=yellow`}
        frameborder="0"
        onmousewheel=""
      />
    </>
  )
}

export default AirtableForm