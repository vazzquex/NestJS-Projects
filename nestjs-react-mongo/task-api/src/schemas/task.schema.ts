import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})
export class Task {

@Prop({
    unique: true,
    required: true,
    trim: true
})
title: String

@Prop({
    trim: true
})
description: String

@Prop({
    default: false
})
done: Boolean
}


export const taskSchema = SchemaFactory.createForClass(Task)