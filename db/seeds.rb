# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dive = Dive.create(
        dive_number: 1,
        date: Time.now.to_s,
        location: "26.191335633, -96.861823469",
        time_in: "0900",
        time_out: "0920",
        psi_in: "3000",
        psi_out:"1500",
        pg_in: "A",
        pg_out: "N",
        depth: "80",
        time_at_depth: "20",
        rnt: "6",
        abt: "20",
        tnt: "26",
        equipment: "wetsuit 2mm, 5 lbs weight, bc, regulator, dive computer, fins, mask, speargun, snorkel",
        notes: "Dove on USTS Texas Clipper. Saw a shark, swam away.. it ate dave.",
        buddy: "Dave",
        vis_surface: "15",
        vis_bottom: "15",
        air_temp: "85",
        water_temp: "78",
        dive_type: "Wreck"
    )
