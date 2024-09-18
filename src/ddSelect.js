import React from 'react'

export default function ddSelect() {
    return (
        <div>
            <label for="pet-select">Choose a pet:</label>

            <select name="pets" id="pet-select">

                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>

        </div>
    )
}
