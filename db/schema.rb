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

ActiveRecord::Schema.define(version: 20161007163049) do

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.text     "comment"
    t.string   "attached_to_type"
    t.integer  "attached_to_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["attached_to_type", "attached_to_id"], name: "index_comments_on_attached_to_type_and_attached_to_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "docs", force: :cascade do |t|
    t.text     "description"
    t.string   "title"
    t.integer  "group_id"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "document_file_name"
    t.string   "document_content_type"
    t.integer  "document_file_size"
    t.datetime "document_updated_at"
    t.integer  "user_id"
    t.index ["group_id"], name: "index_docs_on_group_id"
    t.index ["user_id"], name: "index_docs_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "owner_id"
    t.boolean  "active"
    t.index ["owner_id"], name: "index_groups_on_owner_id"
  end

  create_table "groups_users", id: false, force: :cascade do |t|
    t.integer "user_id",  null: false
    t.integer "group_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.date     "last_login"
    t.string   "name"
    t.string   "encrypted_password"
    t.string   "salt"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

end
