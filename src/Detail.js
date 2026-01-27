import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import "./styles/Detail.css"; // Tu CSS sigue igual

// Datos de roles

const iconData = [
  // Sequence 0 - The Fool
  {
    title: "The Fool",
    logoColor: require("./assets/iconColor/0_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(26, 6, 37, 0.53)",
    neighbors: [
      {
        id: 1,
        iconOff: require("./assets/iconOff/1_Off.png"),
        iconColor: require("./assets/iconColor/1_Color.png"),
      },
      {
        id: 6,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],

    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Clown",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A crystal of a matured Hornacis Gray Mountain Goat Horn.</li>
              <li>A Human-Faced Rose Complete Stalk.</li>
              <li>Or A Clown Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of Purified Water.</li>
              <li>5 drops of Tornapple (Jimsonweed) Juice.</li>
              <li>7 grams of Black-Rimmed Sunflower Powder.</li>
              <li>10 grams of Golden Cloak Grass Powder.</li>
              <li>3 drops of Poison Hemlock.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 7 - Magician",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 True Root of a Mist Treant.</li>
              <li>All the spinal fluid of a Dark Patterned Black Panther.</li>
              <li>Or A Magician Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>60 milliliters of Purified Water.</li>
              <li>30 milliliters of Mist Treant Juice.</li>
              <li>3 grams of Droplet Gem Powder.</li>
              <li>4 drops of Fantasy Grass Essential Oil.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 6 - Faceless",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Mutated pituitary gland of a Thousand-faced Hunter.</li>
              <li>A Human-Skined Shadow's Characteristic.</li>
              <li>Or A Faceless Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of a Thousand-faced Hunter's Blood.</li>
              <li>5 drops of Black Jimsonweed Juice.</li>
              <li>10 grams of Dragon Tooth Grass Powder.</li>
              <li>3 strands of hair from a Deep-sea Naga.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 5 - Marionettist",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>Dust of Ancient Wraiths.</li>
              <li>Core crystal of a Six-Winged Gargoyle.</li>
              <li>Or A Marionettist Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>
                80 milliliters of spring water from Sonia Island's Golden
                Spring.
              </li>
              <li>10 grams of Drago Bark.</li>
              <li>Remnant Spirituality of Ancient Wraiths.</li>
              <li>1 pair of eyes from a six-winged gargoyle.</li>
            </ul>
            <p>Ritual:</p>
            <p>Consume potion amidst the singing of mermaids.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 4 - Bizarro Sorcerer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Bizarro Bane's Main Eye.</li>
              <li>The True Soul Body of a Spirit World Plunderer.</li>
              <li>Or A Bizarro Sorcerer Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>200 milliliters of a Bizarro Bane's Blood.</li>
              <li>30 grams of a Spirit World Plunderer's Dust.</li>
              <li>One segment of Golden Grapevines.</li>
              <li>Fingernail-Sized Self-made Rubber Mask.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Relying on one’s strength and strategy, orchestrate a grand
              performance before many spectators to kill a Beyonder creature at
              the level of a demigod. Then, at the end of the performance,
              consume the potion.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 3 - Scholar of Yore",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>
                Hound of Fulgrim (also known as Sefirah Castle Keeper) pair of
                eyes.
              </li>
              <li>1 Demonic Wolf of Fog's Transformed Heart.</li>
              <li>Or A Scholar of Yore Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>100 milliliters of Hound of Fulgrim Blood.</li>
              <li>30 grams of White Frost Crystal of Demonic Wolf of Fog.</li>
              <li>A large amount of Real Ancient Historical Records.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Be separated from reality for at least three hundred years and
              consume the potion after one becomes history and doesn’t belong to
              the present era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 2 - Miracle Invoker",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 Heart of a Dark Demonic Wolf.</li>
              <li>Or A Miracle Invoker Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>300 milliliters blood of Dark Demonic Wolf.</li>
              <li>A Worm of Time.</li>
              <li>A Worm of Star.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Return a piece of history that has been left behind to the present
              era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 1 - Attendant of Mysteries",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Attendant of Mysteries Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Nine spirit world specialties.</li>
            </ul>
            <p>Ritual:</p>

            <p>
              Build a town consisting only of marionettes, and design a
              trajectory of fate for every marionette. By letting them interact
              with each other, they would act as a sufficiently real-life
              painting and create a corresponding area in the spirit world.
            </p>
            <p>
              The larger the town, the more the marionettes involved, the more
              detailed the daily lives are, and the more realistic and
              extensiveness the different fates are, the better the ritual's
              effects would be.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 0 - Fool",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>The Fool Uniqueness.</li>
              <li>
                All other Attendant of Mysteries Beyonder Characteristics apart
                from one's own.
              </li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Control at least a quarter of the fog of history.</li>
            </ul>
            <p>Ritual:</p>
            <p>Fool time, history, or fate once.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
    ],
  },
  // The Magician
  {
    title: "The Magician",
    logoColor: require("./assets/iconColor/1_Color.png"),
    overlayColor: "rgba(6, 27, 37, 0.53)",
    neighbors: [
      {
        id: 0,
        iconOff: require("./assets/iconOff/0_Off.png"),
        iconColor: require("./assets/iconColor/0_Color.png"),
      },
      {
        id: 6,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],
    card: require("./assets/cards/1_Card.webp"),
    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: <>Descripción del rol 1, secuencia 9...</>,
        card: require("./assets/cards/1_Card.webp"),
      },
      // ... otras secuencias
    ],
  },
  // The Paragon
  {
    title: "The Fool",
    logoColor: require("./assets/iconColor/0_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(26, 6, 37, 0.53)",
    neighbors: [
      {
        id: 1,
        iconOff: require("./assets/iconOff/1_Off.png"),
        iconColor: require("./assets/iconColor/1_Color.png"),
      },
      {
        id: 2,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],

    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Clown",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A crystal of a matured Hornacis Gray Mountain Goat Horn.</li>
              <li>A Human-Faced Rose Complete Stalk.</li>
              <li>Or A Clown Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of Purified Water.</li>
              <li>5 drops of Tornapple (Jimsonweed) Juice.</li>
              <li>7 grams of Black-Rimmed Sunflower Powder.</li>
              <li>10 grams of Golden Cloak Grass Powder.</li>
              <li>3 drops of Poison Hemlock.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 7 - Magician",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 True Root of a Mist Treant.</li>
              <li>All the spinal fluid of a Dark Patterned Black Panther.</li>
              <li>Or A Magician Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>60 milliliters of Purified Water.</li>
              <li>30 milliliters of Mist Treant Juice.</li>
              <li>3 grams of Droplet Gem Powder.</li>
              <li>4 drops of Fantasy Grass Essential Oil.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 6 - Faceless",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Mutated pituitary gland of a Thousand-faced Hunter.</li>
              <li>A Human-Skined Shadow's Characteristic.</li>
              <li>Or A Faceless Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of a Thousand-faced Hunter's Blood.</li>
              <li>5 drops of Black Jimsonweed Juice.</li>
              <li>10 grams of Dragon Tooth Grass Powder.</li>
              <li>3 strands of hair from a Deep-sea Naga.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 5 - Marionettist",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>Dust of Ancient Wraiths.</li>
              <li>Core crystal of a Six-Winged Gargoyle.</li>
              <li>Or A Marionettist Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>
                80 milliliters of spring water from Sonia Island's Golden
                Spring.
              </li>
              <li>10 grams of Drago Bark.</li>
              <li>Remnant Spirituality of Ancient Wraiths.</li>
              <li>1 pair of eyes from a six-winged gargoyle.</li>
            </ul>
            <p>Ritual:</p>
            <p>Consume potion amidst the singing of mermaids.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 4 - Bizarro Sorcerer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Bizarro Bane's Main Eye.</li>
              <li>The True Soul Body of a Spirit World Plunderer.</li>
              <li>Or A Bizarro Sorcerer Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>200 milliliters of a Bizarro Bane's Blood.</li>
              <li>30 grams of a Spirit World Plunderer's Dust.</li>
              <li>One segment of Golden Grapevines.</li>
              <li>Fingernail-Sized Self-made Rubber Mask.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Relying on one’s strength and strategy, orchestrate a grand
              performance before many spectators to kill a Beyonder creature at
              the level of a demigod. Then, at the end of the performance,
              consume the potion.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 3 - Scholar of Yore",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>
                Hound of Fulgrim (also known as Sefirah Castle Keeper) pair of
                eyes.
              </li>
              <li>1 Demonic Wolf of Fog's Transformed Heart.</li>
              <li>Or A Scholar of Yore Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>100 milliliters of Hound of Fulgrim Blood.</li>
              <li>30 grams of White Frost Crystal of Demonic Wolf of Fog.</li>
              <li>A large amount of Real Ancient Historical Records.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Be separated from reality for at least three hundred years and
              consume the potion after one becomes history and doesn’t belong to
              the present era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 2 - Miracle Invoker",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 Heart of a Dark Demonic Wolf.</li>
              <li>Or A Miracle Invoker Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>300 milliliters blood of Dark Demonic Wolf.</li>
              <li>A Worm of Time.</li>
              <li>A Worm of Star.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Return a piece of history that has been left behind to the present
              era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 1 - Attendant of Mysteries",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Attendant of Mysteries Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Nine spirit world specialties.</li>
            </ul>
            <p>Ritual:</p>

            <p>
              Build a town consisting only of marionettes, and design a
              trajectory of fate for every marionette. By letting them interact
              with each other, they would act as a sufficiently real-life
              painting and create a corresponding area in the spirit world.
            </p>
            <p>
              The larger the town, the more the marionettes involved, the more
              detailed the daily lives are, and the more realistic and
              extensiveness the different fates are, the better the ritual's
              effects would be.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 0 - Fool",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>The Fool Uniqueness.</li>
              <li>
                All other Attendant of Mysteries Beyonder Characteristics apart
                from one's own.
              </li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Control at least a quarter of the fog of history.</li>
            </ul>
            <p>Ritual:</p>
            <p>Fool time, history, or fate once.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
    ],
  },
  // The Demoness
  {
    title: "The Fool",
    logoColor: require("./assets/iconColor/0_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(26, 6, 37, 0.53)",
    neighbors: [
      {
        id: 1,
        iconOff: require("./assets/iconOff/1_Off.png"),
        iconColor: require("./assets/iconColor/1_Color.png"),
      },
      {
        id: 2,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],

    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Clown",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A crystal of a matured Hornacis Gray Mountain Goat Horn.</li>
              <li>A Human-Faced Rose Complete Stalk.</li>
              <li>Or A Clown Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of Purified Water.</li>
              <li>5 drops of Tornapple (Jimsonweed) Juice.</li>
              <li>7 grams of Black-Rimmed Sunflower Powder.</li>
              <li>10 grams of Golden Cloak Grass Powder.</li>
              <li>3 drops of Poison Hemlock.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 7 - Magician",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 True Root of a Mist Treant.</li>
              <li>All the spinal fluid of a Dark Patterned Black Panther.</li>
              <li>Or A Magician Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>60 milliliters of Purified Water.</li>
              <li>30 milliliters of Mist Treant Juice.</li>
              <li>3 grams of Droplet Gem Powder.</li>
              <li>4 drops of Fantasy Grass Essential Oil.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 6 - Faceless",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Mutated pituitary gland of a Thousand-faced Hunter.</li>
              <li>A Human-Skined Shadow's Characteristic.</li>
              <li>Or A Faceless Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of a Thousand-faced Hunter's Blood.</li>
              <li>5 drops of Black Jimsonweed Juice.</li>
              <li>10 grams of Dragon Tooth Grass Powder.</li>
              <li>3 strands of hair from a Deep-sea Naga.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 5 - Marionettist",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>Dust of Ancient Wraiths.</li>
              <li>Core crystal of a Six-Winged Gargoyle.</li>
              <li>Or A Marionettist Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>
                80 milliliters of spring water from Sonia Island's Golden
                Spring.
              </li>
              <li>10 grams of Drago Bark.</li>
              <li>Remnant Spirituality of Ancient Wraiths.</li>
              <li>1 pair of eyes from a six-winged gargoyle.</li>
            </ul>
            <p>Ritual:</p>
            <p>Consume potion amidst the singing of mermaids.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 4 - Bizarro Sorcerer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Bizarro Bane's Main Eye.</li>
              <li>The True Soul Body of a Spirit World Plunderer.</li>
              <li>Or A Bizarro Sorcerer Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>200 milliliters of a Bizarro Bane's Blood.</li>
              <li>30 grams of a Spirit World Plunderer's Dust.</li>
              <li>One segment of Golden Grapevines.</li>
              <li>Fingernail-Sized Self-made Rubber Mask.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Relying on one’s strength and strategy, orchestrate a grand
              performance before many spectators to kill a Beyonder creature at
              the level of a demigod. Then, at the end of the performance,
              consume the potion.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 3 - Scholar of Yore",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>
                Hound of Fulgrim (also known as Sefirah Castle Keeper) pair of
                eyes.
              </li>
              <li>1 Demonic Wolf of Fog's Transformed Heart.</li>
              <li>Or A Scholar of Yore Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>100 milliliters of Hound of Fulgrim Blood.</li>
              <li>30 grams of White Frost Crystal of Demonic Wolf of Fog.</li>
              <li>A large amount of Real Ancient Historical Records.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Be separated from reality for at least three hundred years and
              consume the potion after one becomes history and doesn’t belong to
              the present era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 2 - Miracle Invoker",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 Heart of a Dark Demonic Wolf.</li>
              <li>Or A Miracle Invoker Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>300 milliliters blood of Dark Demonic Wolf.</li>
              <li>A Worm of Time.</li>
              <li>A Worm of Star.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Return a piece of history that has been left behind to the present
              era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 1 - Attendant of Mysteries",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Attendant of Mysteries Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Nine spirit world specialties.</li>
            </ul>
            <p>Ritual:</p>

            <p>
              Build a town consisting only of marionettes, and design a
              trajectory of fate for every marionette. By letting them interact
              with each other, they would act as a sufficiently real-life
              painting and create a corresponding area in the spirit world.
            </p>
            <p>
              The larger the town, the more the marionettes involved, the more
              detailed the daily lives are, and the more realistic and
              extensiveness the different fates are, the better the ritual's
              effects would be.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 0 - Fool",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>The Fool Uniqueness.</li>
              <li>
                All other Attendant of Mysteries Beyonder Characteristics apart
                from one's own.
              </li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Control at least a quarter of the fog of history.</li>
            </ul>
            <p>Ritual:</p>
            <p>Fool time, history, or fate once.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
    ],
  },
  // The Black Emperor
  {
    title: "The Fool",
    logoColor: require("./assets/iconColor/0_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(26, 6, 37, 0.53)",
    neighbors: [
      {
        id: 1,
        iconOff: require("./assets/iconOff/1_Off.png"),
        iconColor: require("./assets/iconColor/1_Color.png"),
      },
      {
        id: 2,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],

    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Clown",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A crystal of a matured Hornacis Gray Mountain Goat Horn.</li>
              <li>A Human-Faced Rose Complete Stalk.</li>
              <li>Or A Clown Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of Purified Water.</li>
              <li>5 drops of Tornapple (Jimsonweed) Juice.</li>
              <li>7 grams of Black-Rimmed Sunflower Powder.</li>
              <li>10 grams of Golden Cloak Grass Powder.</li>
              <li>3 drops of Poison Hemlock.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 7 - Magician",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 True Root of a Mist Treant.</li>
              <li>All the spinal fluid of a Dark Patterned Black Panther.</li>
              <li>Or A Magician Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>60 milliliters of Purified Water.</li>
              <li>30 milliliters of Mist Treant Juice.</li>
              <li>3 grams of Droplet Gem Powder.</li>
              <li>4 drops of Fantasy Grass Essential Oil.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 6 - Faceless",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Mutated pituitary gland of a Thousand-faced Hunter.</li>
              <li>A Human-Skined Shadow's Characteristic.</li>
              <li>Or A Faceless Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of a Thousand-faced Hunter's Blood.</li>
              <li>5 drops of Black Jimsonweed Juice.</li>
              <li>10 grams of Dragon Tooth Grass Powder.</li>
              <li>3 strands of hair from a Deep-sea Naga.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 5 - Marionettist",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>Dust of Ancient Wraiths.</li>
              <li>Core crystal of a Six-Winged Gargoyle.</li>
              <li>Or A Marionettist Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>
                80 milliliters of spring water from Sonia Island's Golden
                Spring.
              </li>
              <li>10 grams of Drago Bark.</li>
              <li>Remnant Spirituality of Ancient Wraiths.</li>
              <li>1 pair of eyes from a six-winged gargoyle.</li>
            </ul>
            <p>Ritual:</p>
            <p>Consume potion amidst the singing of mermaids.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 4 - Bizarro Sorcerer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Bizarro Bane's Main Eye.</li>
              <li>The True Soul Body of a Spirit World Plunderer.</li>
              <li>Or A Bizarro Sorcerer Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>200 milliliters of a Bizarro Bane's Blood.</li>
              <li>30 grams of a Spirit World Plunderer's Dust.</li>
              <li>One segment of Golden Grapevines.</li>
              <li>Fingernail-Sized Self-made Rubber Mask.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Relying on one’s strength and strategy, orchestrate a grand
              performance before many spectators to kill a Beyonder creature at
              the level of a demigod. Then, at the end of the performance,
              consume the potion.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 3 - Scholar of Yore",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>
                Hound of Fulgrim (also known as Sefirah Castle Keeper) pair of
                eyes.
              </li>
              <li>1 Demonic Wolf of Fog's Transformed Heart.</li>
              <li>Or A Scholar of Yore Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>100 milliliters of Hound of Fulgrim Blood.</li>
              <li>30 grams of White Frost Crystal of Demonic Wolf of Fog.</li>
              <li>A large amount of Real Ancient Historical Records.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Be separated from reality for at least three hundred years and
              consume the potion after one becomes history and doesn’t belong to
              the present era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 2 - Miracle Invoker",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 Heart of a Dark Demonic Wolf.</li>
              <li>Or A Miracle Invoker Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>300 milliliters blood of Dark Demonic Wolf.</li>
              <li>A Worm of Time.</li>
              <li>A Worm of Star.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Return a piece of history that has been left behind to the present
              era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 1 - Attendant of Mysteries",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Attendant of Mysteries Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Nine spirit world specialties.</li>
            </ul>
            <p>Ritual:</p>

            <p>
              Build a town consisting only of marionettes, and design a
              trajectory of fate for every marionette. By letting them interact
              with each other, they would act as a sufficiently real-life
              painting and create a corresponding area in the spirit world.
            </p>
            <p>
              The larger the town, the more the marionettes involved, the more
              detailed the daily lives are, and the more realistic and
              extensiveness the different fates are, the better the ritual's
              effects would be.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 0 - Fool",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>The Fool Uniqueness.</li>
              <li>
                All other Attendant of Mysteries Beyonder Characteristics apart
                from one's own.
              </li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Control at least a quarter of the fog of history.</li>
            </ul>
            <p>Ritual:</p>
            <p>Fool time, history, or fate once.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
    ],
  },
  // The Tyrant
  {
    title: "The erro",
    logoColor: require("./assets/iconColor/0_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(26, 6, 37, 0.53)",
    neighbors: [
      {
        id: 1,
        iconOff: require("./assets/iconOff/1_Off.png"),
        iconColor: require("./assets/iconColor/1_Color.png"),
      },
      {
        id: 2,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],

    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Clown",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A crystal of a matured Hornacis Gray Mountain Goat Horn.</li>
              <li>A Human-Faced Rose Complete Stalk.</li>
              <li>Or A Clown Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of Purified Water.</li>
              <li>5 drops of Tornapple (Jimsonweed) Juice.</li>
              <li>7 grams of Black-Rimmed Sunflower Powder.</li>
              <li>10 grams of Golden Cloak Grass Powder.</li>
              <li>3 drops of Poison Hemlock.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 7 - Magician",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 True Root of a Mist Treant.</li>
              <li>All the spinal fluid of a Dark Patterned Black Panther.</li>
              <li>Or A Magician Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>60 milliliters of Purified Water.</li>
              <li>30 milliliters of Mist Treant Juice.</li>
              <li>3 grams of Droplet Gem Powder.</li>
              <li>4 drops of Fantasy Grass Essential Oil.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 6 - Faceless",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Mutated pituitary gland of a Thousand-faced Hunter.</li>
              <li>A Human-Skined Shadow's Characteristic.</li>
              <li>Or A Faceless Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of a Thousand-faced Hunter's Blood.</li>
              <li>5 drops of Black Jimsonweed Juice.</li>
              <li>10 grams of Dragon Tooth Grass Powder.</li>
              <li>3 strands of hair from a Deep-sea Naga.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 5 - Marionettist",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>Dust of Ancient Wraiths.</li>
              <li>Core crystal of a Six-Winged Gargoyle.</li>
              <li>Or A Marionettist Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>
                80 milliliters of spring water from Sonia Island's Golden
                Spring.
              </li>
              <li>10 grams of Drago Bark.</li>
              <li>Remnant Spirituality of Ancient Wraiths.</li>
              <li>1 pair of eyes from a six-winged gargoyle.</li>
            </ul>
            <p>Ritual:</p>
            <p>Consume potion amidst the singing of mermaids.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 4 - Bizarro Sorcerer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Bizarro Bane's Main Eye.</li>
              <li>The True Soul Body of a Spirit World Plunderer.</li>
              <li>Or A Bizarro Sorcerer Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>200 milliliters of a Bizarro Bane's Blood.</li>
              <li>30 grams of a Spirit World Plunderer's Dust.</li>
              <li>One segment of Golden Grapevines.</li>
              <li>Fingernail-Sized Self-made Rubber Mask.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Relying on one’s strength and strategy, orchestrate a grand
              performance before many spectators to kill a Beyonder creature at
              the level of a demigod. Then, at the end of the performance,
              consume the potion.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 3 - Scholar of Yore",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>
                Hound of Fulgrim (also known as Sefirah Castle Keeper) pair of
                eyes.
              </li>
              <li>1 Demonic Wolf of Fog's Transformed Heart.</li>
              <li>Or A Scholar of Yore Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>100 milliliters of Hound of Fulgrim Blood.</li>
              <li>30 grams of White Frost Crystal of Demonic Wolf of Fog.</li>
              <li>A large amount of Real Ancient Historical Records.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Be separated from reality for at least three hundred years and
              consume the potion after one becomes history and doesn’t belong to
              the present era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 2 - Miracle Invoker",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 Heart of a Dark Demonic Wolf.</li>
              <li>Or A Miracle Invoker Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>300 milliliters blood of Dark Demonic Wolf.</li>
              <li>A Worm of Time.</li>
              <li>A Worm of Star.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Return a piece of history that has been left behind to the present
              era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 1 - Attendant of Mysteries",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Attendant of Mysteries Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Nine spirit world specialties.</li>
            </ul>
            <p>Ritual:</p>

            <p>
              Build a town consisting only of marionettes, and design a
              trajectory of fate for every marionette. By letting them interact
              with each other, they would act as a sufficiently real-life
              painting and create a corresponding area in the spirit world.
            </p>
            <p>
              The larger the town, the more the marionettes involved, the more
              detailed the daily lives are, and the more realistic and
              extensiveness the different fates are, the better the ritual's
              effects would be.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 0 - Fool",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>The Fool Uniqueness.</li>
              <li>
                All other Attendant of Mysteries Beyonder Characteristics apart
                from one's own.
              </li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Control at least a quarter of the fog of history.</li>
            </ul>
            <p>Ritual:</p>
            <p>Fool time, history, or fate once.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
    ],
  },
  // The Error
  {
    title: "The Error",
    logoColor: require("./assets/iconColor/6_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(26, 6, 37, 0.53)",
    neighbors: [
      {
        id: 1,
        iconOff: require("./assets/iconOff/1_Off.png"),
        iconColor: require("./assets/iconColor/1_Color.png"),
      },
      {
        id: 2,
        iconOff: require("./assets/iconOff/6_Off.png"),
        iconColor: require("./assets/iconColor/6_Color.png"),
      },
    ],

    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Clown",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A crystal of a matured Hornacis Gray Mountain Goat Horn.</li>
              <li>A Human-Faced Rose Complete Stalk.</li>
              <li>Or A Clown Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of Purified Water.</li>
              <li>5 drops of Tornapple (Jimsonweed) Juice.</li>
              <li>7 grams of Black-Rimmed Sunflower Powder.</li>
              <li>10 grams of Golden Cloak Grass Powder.</li>
              <li>3 drops of Poison Hemlock.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 7 - Magician",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 True Root of a Mist Treant.</li>
              <li>All the spinal fluid of a Dark Patterned Black Panther.</li>
              <li>Or A Magician Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>60 milliliters of Purified Water.</li>
              <li>30 milliliters of Mist Treant Juice.</li>
              <li>3 grams of Droplet Gem Powder.</li>
              <li>4 drops of Fantasy Grass Essential Oil.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 6 - Faceless",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Mutated pituitary gland of a Thousand-faced Hunter.</li>
              <li>A Human-Skined Shadow's Characteristic.</li>
              <li>Or A Faceless Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>80 milliliters of a Thousand-faced Hunter's Blood.</li>
              <li>5 drops of Black Jimsonweed Juice.</li>
              <li>10 grams of Dragon Tooth Grass Powder.</li>
              <li>3 strands of hair from a Deep-sea Naga.</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 5 - Marionettist",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>Dust of Ancient Wraiths.</li>
              <li>Core crystal of a Six-Winged Gargoyle.</li>
              <li>Or A Marionettist Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>
                80 milliliters of spring water from Sonia Island's Golden
                Spring.
              </li>
              <li>10 grams of Drago Bark.</li>
              <li>Remnant Spirituality of Ancient Wraiths.</li>
              <li>1 pair of eyes from a six-winged gargoyle.</li>
            </ul>
            <p>Ritual:</p>
            <p>Consume potion amidst the singing of mermaids.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 4 - Bizarro Sorcerer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Bizarro Bane's Main Eye.</li>
              <li>The True Soul Body of a Spirit World Plunderer.</li>
              <li>Or A Bizarro Sorcerer Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>200 milliliters of a Bizarro Bane's Blood.</li>
              <li>30 grams of a Spirit World Plunderer's Dust.</li>
              <li>One segment of Golden Grapevines.</li>
              <li>Fingernail-Sized Self-made Rubber Mask.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Relying on one’s strength and strategy, orchestrate a grand
              performance before many spectators to kill a Beyonder creature at
              the level of a demigod. Then, at the end of the performance,
              consume the potion.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 3 - Scholar of Yore",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>
                Hound of Fulgrim (also known as Sefirah Castle Keeper) pair of
                eyes.
              </li>
              <li>1 Demonic Wolf of Fog's Transformed Heart.</li>
              <li>Or A Scholar of Yore Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>100 milliliters of Hound of Fulgrim Blood.</li>
              <li>30 grams of White Frost Crystal of Demonic Wolf of Fog.</li>
              <li>A large amount of Real Ancient Historical Records.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Be separated from reality for at least three hundred years and
              consume the potion after one becomes history and doesn’t belong to
              the present era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 2 - Miracle Invoker",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>1 Heart of a Dark Demonic Wolf.</li>
              <li>Or A Miracle Invoker Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>300 milliliters blood of Dark Demonic Wolf.</li>
              <li>A Worm of Time.</li>
              <li>A Worm of Star.</li>
            </ul>
            <p>Ritual:</p>
            <p>
              Return a piece of history that has been left behind to the present
              era.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 1 - Attendant of Mysteries",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>A Attendant of Mysteries Beyonder Characteristic.</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Nine spirit world specialties.</li>
            </ul>
            <p>Ritual:</p>

            <p>
              Build a town consisting only of marionettes, and design a
              trajectory of fate for every marionette. By letting them interact
              with each other, they would act as a sufficiently real-life
              painting and create a corresponding area in the spirit world.
            </p>
            <p>
              The larger the town, the more the marionettes involved, the more
              detailed the daily lives are, and the more realistic and
              extensiveness the different fates are, the better the ritual's
              effects would be.
            </p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 0 - Fool",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>The Fool Uniqueness.</li>
              <li>
                All other Attendant of Mysteries Beyonder Characteristics apart
                from one's own.
              </li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>Control at least a quarter of the fog of history.</li>
            </ul>
            <p>Ritual:</p>
            <p>Fool time, history, or fate once.</p>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
    ],
  },
  // ... hasta los 22 roles
];

// Componente Detail
export default function Detail() {
  const { id } = useParams();
  const data = iconData[id]; // Obtener info del icono
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();
  const [hoveredNeighbor, setHoveredNeighbor] = useState(null);

  if (!data) return <p>Información no encontrada</p>;

  return (
    <div className="detail-background">
      {/* Overlay dinámico */}
      <div
        className="detail-overlay"
        style={{ backgroundColor: data.overlayColor }}
      />
      {/* Logo */}
      <div className="detail-logo">
        <img src={data.logoColor} alt="Logo" />
      </div>
      <div className="detail-title">
        <h1>{data.title}</h1>
      </div>

      <div className="detail-content">
        <div className="detail-card-image">
          {/* Carta a la izquierda */}
          <div className="detail-card">
            <img src={data.card} alt="Carta" />
            <h2>Neighboring Pathways</h2>

            {/* Neighbor icons */}
            {Array.isArray(data.neighbors) && data.neighbors.length > 0 && (
              <div className="detail-neighbors">
                {data.neighbors.map((neighbor) => (
                  <img
                    key={neighbor.id}
                    src={
                      hoveredNeighbor === neighbor.id
                        ? neighbor.iconColor
                        : neighbor.iconOff
                    }
                    alt={`Neighbor ${neighbor.id}`}
                    className="neighbor-icon"
                    onMouseEnter={() => setHoveredNeighbor(neighbor.id)}
                    onMouseLeave={() => setHoveredNeighbor(null)}
                    onClick={() => navigate(`/detail/${neighbor.id}`)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Texto y carousel a la derecha */}
        <div className="detail-text">
          {/* Carousel horizontal solo con texto */}
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {data.sequences.map((seq, idx) => (
                <div className="embla__slides" key={idx}>
                  <h2>{seq.seqTitle}</h2>
                  <div className="des">{seq.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
