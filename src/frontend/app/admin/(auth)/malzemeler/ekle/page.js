"use client"
import {addIngredient} from 'app/admin/form-actions/ingredients'
export default function AddIngredient() {
    return (
        <div className="kt-container  kt-grid__item kt-grid__item--fluid">
            <div className="kt-portlet">
                <div className="kt-portlet__head">
                    <div className="kt-portlet__head-label">
                        <h3 className="kt-portlet__head-title">
                            Basic Form Layout
                        </h3>
                    </div>
                </div>
                <form className="kt-form" action={addIngredient}>
                    <div className="kt-portlet__body">
                        <div className="kt-section kt-section--first">
                            <div className="form-group">
                                <label>Malzeme Adı:</label>
                                <input type="text" className="form-control" name="name" placeholder="Malzeme Adı"/>
                                    <span className="form-text text-muted"> Lütfen Malzeme Adını Giriniz</span>
                            </div>
                            <div className="form-group">
                                <label>Malzeme Resmi</label>
                                <div></div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="file" id="file" accept=".jpg,.jpeg,.bmp,.png,.gif"/>
                                        <label className="custom-file-label" htmlFor="file">Malzeme Resmi</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Malzeme Değeri:</label>
                                <input type="text" className="form-control" name="value" placeholder="Malzeme Değeri"/>
                                <span className="form-text text-muted">Lütfen Malzeme Değerini Giriniz</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Malzeme Tipi</label>
                                <select className="form-control" id="type" name="type">
                                    <option value="Adet" >Adet</option>
                                    <option value="Gram">Gram</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="kt-portlet__foot">
                        <div className="kt-form__actions">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
