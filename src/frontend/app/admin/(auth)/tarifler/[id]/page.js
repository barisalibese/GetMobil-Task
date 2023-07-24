import {updateIngredient} from "/app/admin/form-actions/ingredients";
import BaseApiService from "../../../../apiService/BaseApiService";
import Script from "next/script";
async function getIngredients(){
    let apiService= new BaseApiService();
    let response= await apiService.getJSON('/admin/ingredients');
    return response.data;
}
async function getData(id){
    let apiService= new BaseApiService();
    let response= await apiService.getJSON('/admin/recipes/'+id);
    return response.data[0];
}
export default async function UpdateIngredient({params}) {
    let data= await getData(params.id)
    let ingredients = await getIngredients();
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
                <form className="kt-form" action={updateIngredient}>
                    <div className="kt-portlet__body">
                        <input name="id" type="hidden" value={params.id}/>
                        <input name="_method" type="hidden" value="PUT"/>
                        <div className="kt-section kt-section--first">
                            <div className="form-group">
                                <label>Malzeme Adı:</label>
                                <input type="text" className="form-control" defaultValue={data?.name} name="name" placeholder="Malzeme Adı"/>
                                <span className="form-text text-muted"> Lütfen Malzeme Adını Giriniz</span>
                            </div>
                            <div className="form-group">
                                <label>Malzeme Resmi</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="file" id="file" accept=".jpg,.jpeg,.bmp,.png,.gif"/>
                                    <label className="custom-file-label" htmlFor="file">Malzeme Resmi</label>
                                </div>
                                <img src={"http://localhost:8087/storage/uploads/images/"+data?.image_url} width="200px" height="200px" />
                            </div>
                            <div id="kt_repeater_3">

                                <div className="form-group  row">
                                    <label className="col-lg-3 col-form-label">Tarif için malzemeler:</label>
                                    <div data-repeater-list="ingredients" className="col-lg-9">
                                        {data.ingredients.map((value,key)=>(
                                        <div data-repeater-item className="row kt-margin-b-10">
                                            <div className="col-lg-2">
                                                <label>Malzeme Adı</label>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="input-group">
                                                    <select className="form-control" name="id" defaultValue={value?.id}>
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
                                                    <input type="text" name={"ingredients["+key+"][complete_value]"} defaultValue={value?.pivot?.complete_value} className="form-control form-control-danger" placeholder="Lütfen Değer Giriniz."/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <a href="#" data-repeater-delete="" className="btn btn-danger btn-icon">
                                                    <i className="la la-remove"></i>
                                                </a>
                                            </div>
                                        </div>
                                        ))}
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
