import { Prop, Schema } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})
class Task {

@Prop({
    unique: true,
    required: true,
    trim: true
})
title: String

@Prop()
description: String

@Prop()
done: Boolean
}