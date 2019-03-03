import * as Joi from 'joi';

import { ITrack } from './Track';
import { IProfile } from './Profile';

export interface ILabel {
  id?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tracks?: string[] | ITrack[];
  profiles?: string[] | IProfile[];
}

export interface ILabelEntity extends ILabel {
  labelSchema: Joi.ObjectSchema;
  copyData: (data: ILabel) => ILabelEntity;
  getRaw: () => ILabel;
  validate: (data: ILabel) => Joi.ValidationResult<ILabel>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateName: (name: string) => Joi.ValidationResult<string>;
  validateDescription: (description: string) => Joi.ValidationResult<string>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
  validateTracks: (tracks: string[] | ITrack[]) => Joi.ValidationResult<string[] | ITrack[]>;
  validateProfiles: (
    profiles: string[] | IProfile[]
  ) => Joi.ValidationResult<string[] | IProfile[]>;
}

export class Label implements ILabelEntity {
  public id?: string | undefined;
  public name?: string | undefined;
  public description?: string | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public tracks?: string[] | ITrack[] | undefined;
  public profiles?: string[] | IProfile[] | undefined;

  private _validId = Joi.string();
  private _validName = Joi.string();
  private _validDescription = Joi.string();
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();
  private _validTracks = Joi.array();
  private _validProfiles = Joi.array();

  /**
   * Joi Label Schema
   * @type {Joi.ObjectSchema}
   * @memberof Label
   */
  public labelSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      name: this._validName,
      description: this._validDescription,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt,
      tracks: this._validTracks,
      profiles: this._validProfiles
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {ILabel} data
   * @returns {ILabelEntity}
   * @memberof Label
   */
  public copyData(data: ILabel): ILabelEntity {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.tracks = data.tracks;
    this.profiles = data.profiles;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {ILabel}
   * @memberof Label
   */
  public getRaw(): ILabel {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      tracks: this.tracks,
      profiles: this.profiles
    };
  }

  /**
   * Returns if the Label object is valid
   * @param {ILabel} data
   * @returns {Joi.ValidationResult<ILabel>}
   * @memberof Label
   */
  public validate(data: ILabel): Joi.ValidationResult<ILabel> {
    return Joi.validate(data, this.labelSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Label
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Label
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this._validName);
  }

  /**
   * Validates description property
   * @param {string} description
   * @returns {Joi.ValidationResult<string>}
   * @memberof Label
   */
  public validateDescription(description: string): Joi.ValidationResult<string> {
    return Joi.validate(description, this._validDescription);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Label
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Label
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }

  /**
   * Validates tracks property
   * @param {string[] | ITrack[]} tracks
   * @returns {Joi.ValidationResult<string[] | ITrack[]>}
   * @memberof Label
   */
  public validateTracks(tracks: string[] | ITrack[]): Joi.ValidationResult<string[] | ITrack[]> {
    return Joi.validate(tracks, this._validTracks);
  }

  /**
   * Validates profiles property
   * @param {string[] | IProfile[]} profiles
   * @returns {Joi.ValidationResult<string[] | IProfile[]>}
   * @memberof Label
   */
  public validateProfiles(
    profiles: string[] | IProfile[]
  ): Joi.ValidationResult<string[] | IProfile[]> {
    return Joi.validate(profiles, this._validProfiles);
  }
}