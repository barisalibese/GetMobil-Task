import BaseApiService from "../../apiService/BaseApiService";
async function getData(){
    let apiService = new BaseApiService();
    let response= await apiService.getJSON('/ingredients');
    return response.data;
}
export default async function ingredients() {
    let data = await getData();
    return (
        <div>
            <div className="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
                <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

                    <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                        <div className="kt-container ">
                            <div className="kt-subheader__main">
                                <h3 className="kt-subheader__title">
                                    Projects
                                </h3>
                                <span className="kt-subheader__separator kt-subheader__separator--v"></span>
                                <div className="kt-subheader__group" id="kt_subheader_search">
											<span className="kt-subheader__desc" id="kt_subheader_total">
												{data.length} Total </span>
                                    <form className="kt-margin-l-20" id="kt_subheader_search_form">
                                        <div className="kt-input-icon kt-input-icon--right kt-subheader__search">
                                            <input type="text" className="form-control" placeholder="Search..." id="generalSearch"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="kt-subheader__group kt-hidden" id="kt_subheader_group_actions">
                                    <div className="kt-subheader__desc">
                                        <span id="kt_subheader_group_selected_rows"></span> Selected:
                                    </div>
                                    <div className="btn-toolbar kt-margin-l-20">
                                        <div className="dropdown" id="kt_subheader_group_actions_status_change">
                                            <button type="button" className="btn btn-label-brand btn-bold btn-sm dropdown-toggle" data-toggle="dropdown">
                                                Update Status
                                            </button>
                                            <div className="dropdown-menu">
                                                <ul className="kt-nav">
                                                    <li className="kt-nav__section kt-nav__section--first">
                                                        <span className="kt-nav__section-text">Change status to:</span>
                                                    </li>
                                                    <li className="kt-nav__item">
                                                        <a href="#" className="kt-nav__link" data-toggle="status-change" data-status="1">
                                                            <span className="kt-nav__link-text"><span className="kt-badge kt-badge--unified-success kt-badge--inline kt-badge--bold">Approved</span></span>
                                                        </a>
                                                    </li>
                                                    <li className="kt-nav__item">
                                                        <a href="#" className="kt-nav__link" data-toggle="status-change" data-status="2">
                                                            <span className="kt-nav__link-text"><span className="kt-badge kt-badge--unified-danger kt-badge--inline kt-badge--bold">Rejected</span></span>
                                                        </a>
                                                    </li>
                                                    <li className="kt-nav__item">
                                                        <a href="#" className="kt-nav__link" data-toggle="status-change" data-status="3">
                                                            <span className="kt-nav__link-text"><span className="kt-badge kt-badge--unified-warning kt-badge--inline kt-badge--bold">Pending</span></span>
                                                        </a>
                                                    </li>
                                                    <li className="kt-nav__item">
                                                        <a href="#" className="kt-nav__link" data-toggle="status-change" data-status="4">
                                                            <span className="kt-nav__link-text"><span className="kt-badge kt-badge--unified-info kt-badge--inline kt-badge--bold">On Hold</span></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-label-success btn-bold btn-sm btn-icon-h" id="kt_subheader_group_actions_fetch" data-toggle="modal" data-target="#kt_datatable_records_fetch_modal">
                                            Fetch Selected
                                        </button>
                                        <button className="btn btn-label-danger btn-bold btn-sm btn-icon-h" id="kt_subheader_group_actions_delete_all">
                                            Delete All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="kt-container  kt-grid__item kt-grid__item--fluid">

                        <div className="row">
                            {data.map((value,key)=>(
                            <div className="col-xl-3">
                                <div className="kt-portlet kt-portlet--height-fluid">
                                    <div className="kt-portlet__head kt-portlet__head--noborder">
                                        <div className="kt-portlet__head-label">
                                            <h3 className="kt-portlet__head-title">
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="kt-portlet__body">

                                        <div className="kt-widget kt-widget--user-profile-2">
                                            <div className="kt-widget__head">
                                                <div className="kt-widget__media">
                                                    <img className="kt-widget__img kt-hidden-" src={"http://localhost:8087/storage/uploads/images/"+value.image_url} alt="image"/>
                                                        <img className="kt-widget__img kt-hidden" src="assets/media/users/300_21.jpg" alt="image"/>
                                                            <div className="kt-widget__pic kt-widget__pic--success kt-font-success kt-font-boldest kt-hidden">
                                                                ChS
                                                            </div>
                                                </div>
                                                <div className="kt-widget__info">
                                                    <a href="#" className="kt-widget__titel kt-hidden-">
                                                        {value.name}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="kt-widget__body">
                                                <div className="kt-widget__item">
                                                    <div className="kt-widget__contact">
                                                        <span className="kt-widget__label">Stok:</span>
                                                        <a href="#" className="kt-widget__data">{value.value +' ' + value.type }</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kt-widget__footer">
                                                <button type="button" className="btn btn-label-warning btn-lg btn-upper">
                                                    Dolabıma Ekle
                                                </button>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>
                                ))}
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
