import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"

import Icon from "components/icon"
import "components/styles/listing.scss"

const Exercise1ListingExcerpt = ({id, data, image}) => {
    const { listingName = '', location = '', listingType = '', excerpt = '', amenities = [] } = data
    return (
        <article className="listing-excerpt">
            <Link to={`/exercise1/${id}`}>
                <img src={image} alt={listingName} />
            </Link>
            <div>
                <header>
                    <div>
                        <h3>{listingName}</h3>
                        <p>{location} • {listingType}</p>
                    </div>
                    <ul className="amenity-icons">
                        {amenities.map((amenity, index) => {
                            return <li key={index}>
                                <Icon name={amenity} />
                            </li>
                        })}
                    </ul>
                </header>
                <div>
                    <p>{excerpt}</p>
                    <p><Link to={`/exercise1/${id}`} aria-label={`Read more about ${listingName}`}>Read more</Link></p>
                </div>
            </div>
        </article>    
    )
}

Exercise1ListingExcerpt.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        listingName: PropTypes.string,
        location: PropTypes.string,
        listingType: PropTypes.string,
        imageSrc: PropTypes.string,
        excerpt: PropTypes.string,
        amenities: PropTypes.array
    }),
    image: PropTypes.string
}

export default Exercise1ListingExcerpt