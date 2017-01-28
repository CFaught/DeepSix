# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170127232856) do

  create_table "dives", force: :cascade do |t|
    t.integer  "dive_number"
    t.datetime "date"
    t.string   "location"
    t.boolean  "first_dive",    default: true
    t.string   "time_in"
    t.string   "time_out"
    t.integer  "psi_in"
    t.integer  "psi_out"
    t.string   "pg_in"
    t.string   "pg_out"
    t.integer  "depth"
    t.integer  "time_at_depth"
    t.integer  "rnt"
    t.integer  "abt"
    t.integer  "tnt"
    t.string   "equipment"
    t.string   "notes"
    t.string   "buddy"
    t.integer  "vis_surface"
    t.integer  "vis_bottom"
    t.integer  "air_temp"
    t.integer  "water_temp"
    t.string   "dive_type"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
