import {addIngredient} from 'app/admin/form-actions/recipes'
import BaseApiService from "../../../../apiService/BaseApiService";
import Script from "next/script";
async function getIngredients(){
    let apiService= new BaseApiService();
    let response= await apiService.getJSON('/admin/ingredients');
    return response.data;
}
export default async function AddIngredient() {
    let ingredients= await getIngredients();
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
                                <label>Yemek Adı:</label>
                                <input type="text" className="form-control" name="name" placeholder="Malzeme Adı"/>
                                    <span className="form-text text-muted"> Lütfen Malzeme Adını Giriniz</span>
                            </div>
                            <div className="form-group">
                                <label>Malzeme Resmi</label>
                                <div></div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="file" id="file" accept=".jpg,.jpeg,.bmp,.png,.gif"/>
                                        <label className="custom-file-label" htmlFor="file">Yemek Resmi</label>
                                </div>
                            </div>
                            <div id="kt_repeater_3">
                                <div className="form-group  row">
                                    <label className="col-lg-3 col-form-label">Tarif için malzemeler:</label>
                                    <div data-repeater-list="ingredients" className="col-lg-9">
                                        <div data-repeater-item className="row kt-margin-b-10">
                                            <div className="col-lg-2">
                                            <label>Malzeme Adı</label>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="input-group">
                                                    <select className="form-control" name="id">
                                                        {ingredients.map((value)=>(
                                                        <option value={value?.id} >{value.name}</option>
                                                            ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <label> Malzeme Tamamlanma Değeri</label>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="input-group">
                                                    <input type="text" name="complete_value"  className="form-control form-control-danger" placeholder="Lütfen Değer Giriniz."/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <a href="#" data-repeater-delete="" className="btn btn-danger btn-icon">
                                                    <i className="la la-remove"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3"></div>
                                    <div className="col">
                                        <div data-repeater-create="" className="btn btn btn-primary">
																		<span>
																			<i className="la la-plus"></i>
																			<span>Add</span>
																		</span>
                                        </div>
                                    </div>
                                </div>
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
        <Script src="/assets/js/pages/crud/forms/widgets/form-repeater.js"/>
        </div>
    )
}
